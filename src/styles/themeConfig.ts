import type { ThemeConfig } from 'antd';
import './globals.css';

const theme: ThemeConfig = {
    token: {
        fontSize: 14,
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
        Radio: {
            colorPrimary: 'var(--primary-color)',
            colorPrimaryHover: 'var(--primary-color)',
        },
        Input: {
            hoverBorderColor: 'var(--primary-color)',
            activeBorderColor: 'var(--primary-color)',
            paddingBlock: 8,
            paddingInline: 12,
        },
        Switch: {
            colorPrimary: 'var(--primary-color)',
        },
        DatePicker: {
            hoverBorderColor: 'var(--primary-color)',
            activeBorderColor: 'var(--primary-color)',
            paddingBlock: 8,
            paddingInline: 12,
        }
    },
};

export default theme;
