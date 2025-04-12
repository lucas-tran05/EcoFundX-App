import type { ThemeConfig } from 'antd';
import './globals.css';  

const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: 'var(--primary-color)',
        borderRadius: 8,
    },
    components: {
        Button: {
            colorPrimary: 'var(--primary-color)', 
            colorPrimaryHover: 'var(--primary-color)', 
            colorPrimaryActive: 'var(--primary-color)', 
            
        },
        Menu: {
            colorPrimary: 'var(--primary-color)',
        },
        Steps: {
            colorPrimary: 'var(--primary-color)',
        },
        Checkbox: {
            colorPrimary: 'var(--primary-color)',
            colorPrimaryHover: 'var(--primary-color)',
        },
    },
};

export default theme;
