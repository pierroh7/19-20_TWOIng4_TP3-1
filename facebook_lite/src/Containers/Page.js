import React from 'react';
import Profil from  './Profil'; 

export default class Page extends Component {
    constructor(props){
        super(props);

        this.state = 
        {
            profiles: 
            [
                {
                    id: 0,
                    name:"Jean",
                    surname:"Louis",
                    date:"11/11/1999",
                    img:"",
                    post:"",
                    like: 300,
                    background_color:"#2A558C",
                },

                {
                    id: 1,
                    name: "Louis",
                    surname: "Jean",
                    date: "11/12/1999",
                    img: "",
                    post: "",
                    like: 300,
                    background_color: "#2A558C",
                },

                {
                    id: 2,
                    name: "Jean-Louis",
                    surname: "Louis-Jean",
                    date: "12/11/1999",
                    img: "",
                    post: "",
                    like: 300,
                    background_color: "#2A558C",
                }
            ],
            person_select=0
        };
    }

    render() {
        return (
            <div className="Page">
                <Switch
                    p1={this.state.profiles[0]}
                    p2={this.state.profiles[1]}
                    p3={this.state.profiles[2]}
                    handleClick={this.handleClick}
                    p_num={this.state.personne_select}
                />

                <Profil
                    personne={this.state.profils[this.state.personne_select]}
                    addLike={this.addLike}
                    changeStyle={this.changeStyle}
                />
            </div>
        );
    }
}

export default Page;