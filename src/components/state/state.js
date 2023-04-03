import React, { Component } from "react"
import Card from "../card/card"
import styles from "../../App.module.css"
// төрөлтэй ажиллах function төрөл нь юу ч байж болно

class State extends Component{
    state = {
        name: "ene bol state iin name gedeg huwisagchtai object ymaa ",
        zurag: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
        type: true,
        number: 88888888,
        null: null,
        arr: [
            {
                title: "title 1",
                des:"hhe",
                img: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
                css: styles.box
            },
            {
                title: "title 2",
                des:"hhu",
                img: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
            },
            {
                title: "title 3",
                des:"hha",
                img: "https://cdnp.cody.mn/spree/images/1530574/large/open-uri20221028-839468-396hro.",
                css: styles.box3
            },
        ]
    }
    render(){
        return(
            <div className={styles.grid}>
                {this.state.arr.map((props) => {
                    return(
                        <Card
                            title = {props.title}
                            des = {props.des}
                            img = {props.img}
                            style = {props.css}
                        />
                    )
                })}
            </div>
        )
    }
}

export default State





















