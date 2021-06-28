import { memo, useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { Select, ConfigProvider, Table, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import './App.css';
import { useMainCTX } from './utils/MainCTX';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const { Option } = Select;

const App = memo(() => {
  const [theme, setTheme] = useState('light');
  const { locale, changeLang } = useMainCTX();
  const { switcher, status, themes } = useThemeSwitcher();
  const { t } = useTranslation();

  const columns = [
    {
      title: t('users.table.name'),
      dataIndex: 'name',
      key: 'name',
      render: (data) => <a href='/'>{data}</a>,
    },
    {
      title: t('users.table.age'),
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: t('users.table.address'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('users.table.tags'),
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {t(`tags.${tag}`).toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const handleThemeChange = (t: string) => {
    let theme: string;
    switch (t) {
      case 'light':
        setTheme(t);
        theme = themes.light;
        break;
      case 'dark':
        setTheme(t);
        theme = themes.dark;
        break;
      default:
        setTheme('light');
        theme = themes.light;
        break;
    }
    switcher({ theme });
  };

  // Avoid theme change flicker
  if (status === 'loading') {
    return null;
  }

  return (
    <ConfigProvider locale={locale}>
      <div className='fade-in main'>
        <span className='msg'>{t('theme.name')}:</span>
        <Select value={theme} onSelect={handleThemeChange}>
          <Option value='light'>{t('theme.light')} </Option>
          <Option value='dark'>{t('theme.dark')} </Option>
        </Select>
        <br />
        <span className='msg'>{t('language')}:</span>
        <Select defaultValue='es_ES' onSelect={changeLang}>
          <Option value='es_ES'>Español</Option>
          <Option value='en_US'>English</Option>
        </Select>
        <br />
        <br />

        <Table columns={columns} dataSource={data} />
      </div>
    </ConfigProvider>
  );
});

export default App;
