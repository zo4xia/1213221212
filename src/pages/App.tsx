import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ConfigProvider as ADMConfigProvider } from 'antd-mobile';

// 导入欢迎页面
import LandingPage from './LandingPage';

// 导入移动端页面
import LoginPage from './LoginPage';
import CategoryPage from './CategoryPage';
import ChatPage from './ChatPage';
import SpotListPage from './SpotListPage';
import SpotDetailPage from './SpotDetailPage';
import UserProfilePage from './UserProfilePage';

// 导入管理后台组件
import AdminPanelRefactored from '../components/AdminPanelRefactored';
import AgentManager from '../components/AgentManager';

const App: React.FC = () => {
  return (
    <Router>
      <ADMConfigProvider>
        <ConfigProvider
          locale={zhCN}
          theme={{
            token: {
              colorPrimary: '#1677ff',
              borderRadius: 8,
              fontSize: 14,
            },
          }}
        >
          <Routes>
            {/* 欢迎页作为新的应用入口 */}
            <Route path="/welcome" element={<LandingPage />} />
            <Route path="/" element={<Navigate to="/welcome" replace />} />

            {/* 移动端页面路由 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/spotlist/:type" element={<SpotListPage />} />
            <Route path="/spotdetail/:id" element={<SpotDetailPage />} />
            <Route path="/profile" element={<UserProfilePage />} />

            {/* 管理后台/Agent演示路由 */}
            <Route path="/admin" element={<AdminPanelRefactored />} />
            <Route path="/agent" element={<AgentManager />} />

            {/* 对于未匹配到的任何其他路径，重定向到欢迎页 */}
            <Route path="*" element={<Navigate to="/welcome" replace />} />
          </Routes>
        </ConfigProvider>
      </ADMConfigProvider>
    </Router>
  );
};

export default App;
