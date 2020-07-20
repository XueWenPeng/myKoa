import React, { useState } from 'react';

import './style.less';

const TestDemo = (props) => {
    const [ada, setAda] = useState({
        title: 'adaxh.site',
        url: 'http://www.adaxh.site',
    });
    return (
        <div styleName="container">
            <span
                onClick={() => {
                    window.open(ada.url);
                }}
            >{`无情链接：${ada.title}`}</span>
        </div>
    );
};

export default TestDemo;
