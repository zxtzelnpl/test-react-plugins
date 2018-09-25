import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import * as classNames from 'classnames/bind';
import shallowequal from 'shallowequal';
import omit from 'omit.js';

import getScroll from '../_util/getScroll';
import { throttleByAnimationFrameDecorator } from '../_util/throttleByAnimationFrame';

function getTargetRect(target: HTMLElement | Window | null): ClientRect {
    return target !== window ?
        (target as HTMLElement).getBoundingClientRect() :
        { top: 0, left: 0, bottom: 0 } as ClientRect;
}
