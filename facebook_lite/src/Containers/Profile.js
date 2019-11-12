import React from 'react';
import Denis from './Denis.jpg'; 
import Johnny from './Johnny.jpg';


class Profile extends React.Component {
    //Constructeur
    constructor(props) {
        super(props);

        //Profil défaut
        this.state = {
            
            Denis:   
                {
                    name: 'Denis',
                    surname: 'Brognart',
                    birthDate: '12/12/1912',
                    background_color: 'rouge',
                    likes: 200,
                    description: 'Lorem ipsumipsum ipsu mipsum ipsumips um ipsum',
                    img: Denis
                },

            Johnny: 
                {
                    name: 'Johnny',
                    surname: 'Cash',
                    birthDate: '30/11/1930',
                    background_color: 'bleu',
                    likes: 300,
                    description: 'Lorem ipsumipsum ipsu mipsum ipsumips um ipsum',
                    img: Johnny
                }
        }
        this.getProfile = this.getProfile.bind(this);
        this.editBackgroundColor = this.editBackgroundColor.bind(this);
        this.addLike = this.addLike.bind(this);
    }

    //Changement couleur 
    editBackgroundColor() {
        if (this.state.background_color === 'rouge') 
        {
            this.setState(
                {
                    background_color: 'vert'
                }
            );
        }
        else
        {
            this.setState(
                {
                    background_color: 'bleu'
                }
            );
        }
    }

    //Edition profil
    getProfile(next_Profile) {
        this.setState(
            {
                name: name,
                surname: surname,
                birthDate: birthDate,
                background_color: background_color,
                img: img
            }
        )
    }

    //Compteur de Likes
    addLike(){
        this.setState(
            {
                likes: this.state.likes +  1,
            }
        )
    }

    //Render
    render() {
        return (

            <div class="text-align center">
                {/*Boutons Switch Profile*/}
                <button onClick={() => this.getProfile('Denis', 'Brognart', '12/12/1912', 'rouge', Denis)}> Denis </button>
                <button onClick={() => this.getProfile('Johnny', 'Cash', '30/11/1930', 'bleu', Johnny)}> Johnny </button>
                <button onClick={() => this.getProfile('Da', 'Claude', '15/02/1956', 'vert')}> Claude </button>

                {/*Div du profil*/}
                <div id={this.state.couleur}>
                    <div>
                        <img src={this.state.img} width="300px" height="300px" />
                    </div>
                    <div>
                        <p>{this.state.name} {this.state.surname} </p>
                    </div>
                    <div>
                        <p> Date de naissance : {this.state.birthDate} </p>
                    </div>
                    <div>
                        <button onClick={() => this.editBackgroundColor()}> Changer couleur de fond </button>
                        <button onClick={() => this.addLike(this.state.likes)}> C'est Super !  </button>
                        <p>{this.state.likes} Likes</p>
                    </div>
                </div>
            </div>

        );
    }

}
export default Profile;