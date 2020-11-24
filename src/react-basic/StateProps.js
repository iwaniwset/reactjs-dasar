import React, { Component } from 'react'

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    gantiMakanan(makanan_baru){
        this.setState({
            makanan: makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.makanan}</h3>
                {/* <button onClick={()=>this.setState({makanan: "Soto"})}>Ganti Makanan</button>  */}
                {/* baris code 15 ini cara pertama untuk menjalankan fucntion */}
                {/* atau kita bisa buat seperti baris 18 dengan mendeklarasikan diluar render */}
                <button onClick={()=>this.gantiMakanan("Soto")}>Ganti Makanan</button>
            </div>
        )
    }
}
