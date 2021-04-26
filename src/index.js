import dva from 'dva';
import './style/main.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// 1. Initialize
const app = dva();

// 2. Plugins
app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
