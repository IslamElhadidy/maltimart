import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tabs.css'
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useRef } from 'react';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({product}) {
  const [value, setValue] = React.useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const [rating,setRating] = React.useState(null)




  const handleSumbit = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      username: reviewUserName,
      message:reviewUserMsg,
      rating,
    }

    if(reviewObj.username === '' || reviewObj.message === '' || rating === null ) {
      toast.error('Fields Required!')
    } else{
      toast.success('Review Submitted')
    }
    
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label=<p>Description</p> {...a11yProps(0)} />
          <Tab label=<p>Reviews ({product.reviews.length})</p> {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {product.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
            {
                product.reviews.map((item,index) => {
                    return(
                        <div className='mb-4 reviews' key={index}>
                            <div>
                                <h6 className='fs-6'>Eslam Elhadidy</h6>
                                <p>{item.rating} (rating)</p>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    )
                })
            }

            <div className='exp d-flex gap-3 flex-column pt-4'>
                <h6 className='text-dark text-start'>Leave Your experience</h6>
                <form onSubmit={handleSumbit}>
                <input type="text" placeholder='Enter Name' ref={reviewUser}/>
                <div className='stars d-flex gap-2 align-items-center'>
                    <motion.div whileTap={{scale:1.2}} className='d-flex gap-1' onClick={() => setRating(1)}>
                        <p>1</p>
                        <i class="ri-star-fill"></i>
                    </motion.div>
                    <motion.div whileTap={{scale:1.2}} className='d-flex gap-1'  onClick={() => setRating(2)} >
                        <p>2</p>
                        <i class="ri-star-fill"></i>
                    </motion.div>
                    <motion.div whileTap={{scale:1.2}} className='d-flex gap-1'  onClick={() => setRating(3)}>
                        <p>3</p>
                        <i class="ri-star-fill"></i>
                    </motion.div>
                    <motion.div whileTap={{scale:1.2}} className='d-flex gap-1'  onClick={() => setRating(4)}>
                        <p>4</p>
                        <i class="ri-star-fill"></i>
                    </motion.div>
                    <motion.div whileTap={{scale:1.2}} className='d-flex gap-1'  onClick={() => setRating(5)}>
                        <p>5</p>
                        <i class="ri-star-fill"></i>
                    </motion.div>
                </div>
                <textarea name="" id="" cols="20" rows="4" placeholder='Review Msg..' ref={reviewMsg} ></textarea>
                <button className='mt-3'>sumbit</button>
                </form>
            </div>
      </TabPanel>
    </Box>
  );
}