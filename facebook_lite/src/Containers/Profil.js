import React from 'react';

export default class Profil extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Profil">

                <div className="Personne" style={{ backgroundColor: this.props.personne.background }}>
                    <img className="ProfilePicture" src={this.props.personne.img} alt="Profile Picture" />
                    <div class="wrapper">
                        <div class="Name"><b>Prenom :</b> {this.props.personne.prenom}</div>
                        <div class="Surname"><b>Nom : </b> {this.props.personne.nom}</div>
                        <div class="Date"><b>Date de naissance : </b>{this.props.personne.date}</div>
                    </div>
                    <p className="BgButtonContainer">
                        <button type="button" class="btn btn-primary btn-indigo btn-lg btn-rounded waves-effect" onClick={() => this.props.changeStyle(this.props.personne.id)} >Change style</button>
                    </p>
                </div>
                <div className="Post">
                    <h2 className="titre_post">Dernière publication</h2>
                    <p className="the-post">"{this.props.personne.post}"</p>
                    <button type="button" class="btn btn-primary btn-cyan btn-lg btn-rounded waves-effect" onClick={() => this.props.addLike(this.props.personne.id)}>{this.props.personne.like} 👍 C'est super !</button>
                </div>
            </div>
        )
    }
}