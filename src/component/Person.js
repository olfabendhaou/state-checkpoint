import React, { Component } from 'react'
export default class Profile extends Component() {
    constructor(props) {
        super(props);
        this.person = {
            person: {
            fullName: 'BenDhaou Olfa',
            bio: 'Ingénieur Èléctromécanique',
            imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg',
            profession: 'Web Develloper'
            }}
        this.state={count:0}
        }
    componentDidMount() {
        setInterval(() => {this.setState(prevState=>({
            count:prevState.count+1
        }))}, 1000)
        }
    render() {
        return (
            <div>
            <h2>{this.person.Fullname}</h2>
            <h2>{this.person.bio}</h2>
            <h2>{this.person.profession}</h2>
            <h2>{this.state.count}</h2>
            <img src={this.person.imgSrc} style={{width:'500 px'}} alt='img' />
            </div>
        )}
}
















