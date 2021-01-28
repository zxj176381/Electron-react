import React, { Component } from 'react';
import style from './index.module.scss';
import miniIcon from '@/assets/header/minimize.png';
import miniIconHover from '@/assets/header/minimize-hover.png';
import maxIcon from '@/assets/header/maxmize.png';
import maxIconHover from '@/assets/header/maxmize-hover.png';
import closeIcon from '@/assets/header/close.png';
import closeIconHover from '@/assets/header/close-hover.png';

export default class HeaderWinOpera extends Component {
  constructor(props) {
    super(props);
    const { min, max, close } = window.electron;
    this.state = {
      winIcon: [
        {
          icon: miniIcon,
          iconHover: miniIconHover,
          alt: '最小化',
          click: () => {
            min();
          },
        },
        {
          icon: maxIcon,
          iconHover: maxIconHover,
          alt: '最大化',
          click: () => {
            max();
          },
        },
        {
          icon: closeIcon,
          iconHover: closeIconHover,
          alt: '关闭',
          click: () => {
            close();
          },
        },
      ],
      currentIconIndex: -1,
    };
  }

  render() {
    return (
      <div className={style.opera}>
        {this.state.winIcon.map((item, index) => {
          item.currentIcon = item.icon;
          return (
            <div
              className={style.opera__image}
              onMouseOut={() => {
                this.setState({
                  currentIconIndex: -1,
                });
              }}
              onMouseOver={() => {
                this.setState({
                  currentIconIndex: index,
                });
              }}
              onClick={item.click}
              key={index}
            >
              <img
                src={
                  this.state.currentIconIndex === index
                    ? item.iconHover
                    : item.icon
                }
                alt={item.alt}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
