import React from "react";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from "@material-ui/core/Button";

const LeftPanel = (props) => {

    const imagesrc = (name) => {
      name = name.toLowerCase();
        let src = "/" + name + ".png"
        return src
    }

    return(
        <Grid id='GridLeft'
            justify='space-between'
            alignItems='flex-end' container>
            {props.items !== null ?
                props.items.map((item, i) => (
                    <span id="item" key={"item" + i}>
                        <Card className='CardRoot' >
                            <CardHeader title={item.heading} />
                            <CardContent>
                                <img alt="Your Cart" src={imagesrc(item.name)} className="d-inline-block align-top" />
                            </CardContent>
                            <CardActions>
                                <Button id={"buttonAdd" + i} value={i} onClick={() => props.addItem(item)}>
                                    <AddIcon />
                                </Button>
                                <Button id={"buttonDelete" + i} onClick={() => props.removeItem(item)}>
                                    <RemoveIcon />
                                </Button>
                            </CardActions>
                        </Card>
                    </span>
                ))
                : ""
            }
        </Grid>

    )
}
export default LeftPanel;