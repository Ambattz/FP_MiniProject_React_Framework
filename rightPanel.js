import React from "react";
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const RightPanel = (props) => {

    return(
    <Grid id='GridRight'>
        <Grid>
            <img alt="Your Cart" src="/shopping-cart.png" className="d-inline-block align-top" />
            <CardHeader title='Your Cart' />
        </Grid>
        <Grid item>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="table-header">Item</TableCell>
                        <TableCell className="table-header" align='center'>Quantity</TableCell>
                        <TableCell className="table-header" align='center'>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody id='shoppingCart'>
                        { props.cart !== null 
                            ? props.cart.map((item, i) => (
                                <TableRow id={"itemRow" + i} key={"itemRow" + i}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell align='center'>{item.quantity}</TableCell>
                                    <TableCell align='center'>$ {item.totalPrice}</TableCell>
                                </TableRow>
                            ))
                            : ""}
                    <TableRow>
                        <TableCell>Coupon Code</TableCell>
                        <TableCell></TableCell>
                        <TableCell align='center'>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.coupon}
                                onChange={props.handleCouponChange}
                            >
                                <MenuItem value={0}>NONE</MenuItem>
                                <MenuItem value={15}>OFF15</MenuItem>
                                <MenuItem value={25}>OFF25</MenuItem>
                            </Select>
                        </TableCell>
                    </TableRow>
                    <TableRow id='subTotalRow'>
                        <TableCell>Sub Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell align='center'>$ {props.subTotal}</TableCell>
                    </TableRow>
                    <TableRow id='shippingRow'>
                        <TableCell>Shipping</TableCell>
                        <TableCell></TableCell>
                        <TableCell align='center'>$ {props.subTotal > 50 || props.subTotal === 0 ? 0 : 3.00}</TableCell>
                    </TableRow>
                    <TableRow id='taxRow'>
                        <TableCell>Tax(5%)</TableCell>
                        <TableCell></TableCell>
                        <TableCell align='center'>$ {props.subTotal * 0.05}</TableCell>
                    </TableRow>
                    <TableRow id="totalPriceRow">
                        <TableCell>Total Price</TableCell>
                        <TableCell></TableCell>
                        <TableCell align='center'>
                            $ {props.subTotal > 50 || props.subTotal === 0 ? props.subTotal + (props.subTotal * 0.05) :
                                props.subTotal + (props.subTotal * 0.05) + 3.00}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Grid>
    </Grid>
    )
}

export default RightPanel;
