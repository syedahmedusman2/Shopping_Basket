import React from "react";
import Navbar from "./../Navbar";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';


import { useSelector, useDispatch } from "react-redux";
import { displayState, item } from "../../controller/slicetypes";
import {Remove_From_Basket} from '../../controller/controllerSlice'

const Checkout = () => {
  let checkout = useSelector((state: displayState) => state.baskets.basket);
  const dispatch = useDispatch();

  const handleClick = (item: item) => {
    dispatch(Remove_From_Basket(item))
  }

  return (
    <div>
      <Navbar />

      <div className="checkout__items">
        {checkout.length > 0 ? checkout.map((curr: item, ind: number) => {
          return (
            <div key={ind}>
            <Paper 
              elevation={3}
              style={{ maxWidth: "660px", margin: "40px auto", padding: "5px 20px" , display: "flex", flexFlow:"wrap", justifyContent: "space-between", alignItems: "center"}}
            >
              <div style={{ margin: "0 auto"}}>
                <img 
                  src={curr.src}
                  alt={curr.name}
                  style={{ width: "150px", height: "150px", textAlign: "center"}}
                />
              </div>
              <div style={{width: "300px"}}>
                <h1>${curr.price}</h1>
                <h3>{curr.name}</h3>
              </div>
              <div style={{textAlign: "center", width: "200px",  margin: "0 auto"}}>
                <p>Note:This is a dummy website, for order, call: 03101222062 || 03158224993</p>
                <Button
                  onClick={() => handleClick(curr)}
                  variant="contained"
                  color="primary"
                  startIcon={<DeleteIcon />}
                  size="small"
                >
                  
                  Delete
                </Button>
              </div>
            </Paper>
            </div>
          );
        }): 
      
           <div
              style={{margin: "100px auto"}}
            >
              <h1></h1>
              <h2>Note:This is a dummy website, for order, call: 03101222062 || 03158224993</h2>

                <h1>Not Found</h1>

                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                

            </div>
        }
      </div>
    </div>
  );
};

export default Checkout;