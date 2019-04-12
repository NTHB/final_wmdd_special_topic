import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import shadows from '@material-ui/core/styles/shadows';

const styles = {
    article: {
        width: '96%',
        margin: '1rem 2%',
        backgroundColor: 'white',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2)'
    },
    content: {
        textAlign: 'left',
    },
    description: {
        color: 'rgba(0, 0, 0, 0.60)'
    },
    sub_detail: {
        color: 'rgba(0, 0, 0, 0.54)'
    }

    
}

const Article = (props) => (
    <Grid container spacing={32} className={props.classes.article}>
        <Grid item md={4}>
        <a href={props.url}>
            {props.urlToImage && <img src={props.urlToImage} alt={props.title} />}
            {!props.urlToImage && <p>Source</p>}
        </a>
        </Grid>

        <Grid item md={8} className={props.classes.content}>
        <h3>{props.title}</h3>
        <p>
            {props.content}
        </p>
        <p className={props.classes.description}>
            {props.description !== '' && `Description: ${props.description}`}
        </p>
        <p className={props.classes.sub_detail}>
            {props.author !== null && `By ${props.author}. `}
            From <a href={props.url}>{props.source}</a>. Published at {props.publishedAt}
        </p>
        </Grid>

    </Grid>
)
 
export default withStyles(styles)(Article)