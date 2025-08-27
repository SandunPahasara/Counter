import React, { useState } from 'react';
import { Button, Card, InputNumber, Typography, Switch, List } from 'antd';
import { StepBackwardOutlined, StepForwardOutlined, ReloadOutlined } from '@ant-design/icons';
import './App.css';

const { Title } = Typography;

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([0]);
  const [dark, setDark] = useState(false);

  const min = -10;
  const max = 10;

  const updateCount = (newCount) => {
    if (newCount < min || newCount > max) return;
    setCount(newCount);
    setHistory([newCount, ...history]);
  };

  return (
    <div className={dark ? 'dark' : ''} style={styles.container}>
      <Card style={styles.card} bordered>
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          checked={dark}
          onChange={setDark}
          style={{ float: 'right' }}
        />
        <Title level={2}>Beautiful Counter</Title>
        <Title level={3}>{count}</Title>
        <div style={{ marginBottom: 16 }}>
          <Button
            icon={<StepBackwardOutlined />}
            onClick={() => updateCount(count - step)}
            disabled={count - step < min}
            style={styles.button}
          />
          <Button
            icon={<ReloadOutlined />}
            onClick={() => updateCount(0)}
            style={styles.button}
          >
            Reset
          </Button>
          <Button
            icon={<StepForwardOutlined />}
            onClick={() => updateCount(count + step)}
            disabled={count + step > max}
            style={styles.button}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <span>Step: </span>
          <InputNumber min={1} max={5} value={step} onChange={setStep} />
        </div>
        <div>
          <Title level={5}>History</Title>
          <List
            size="small"
            bordered
            dataSource={history.slice(0, 5)}
            renderItem={item => <List.Item>{item}</List.Item>}
            style={{ maxWidth: 200, margin: '0 auto' }}
          />
        </div>
      </Card>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
    transition: 'background 0.3s',
  },
  card: {
    minWidth: 350,
    boxShadow: '0 2px 8px #f0f1f2',
  },
  button: {
    margin: '0 8px',
  },
};

export default App;