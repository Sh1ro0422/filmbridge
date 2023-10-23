'use client'
import React, { Component } from 'react';
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types';

interface DursProps {
    icon: string,
    className?: string,
    style?: object,
}
const Durs = (props:DursProps) => {
    const { className, icon, style } = props
    return (
        <span className={className} style={{
            ...style
        }}>
            <Icon icon={icon} />
       </span>
    )
}

Durs.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Durs;
