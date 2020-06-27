import React from 'react'

export default class LinkExternal extends React.Component {
    render() {
        return (
            <a href={this.props.to} target='_blank' rel='noreferrer'>
                {this.props.children}
            </a>
        )
    }
}