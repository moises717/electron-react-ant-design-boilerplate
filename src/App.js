import { useState } from "react";
import { Layout, Menu, Table, Typography, Affix } from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	OrderedListOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarcode,
	faMinusCircle,
	faTimes,
	faWindowMaximize,
	faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const { Header, Sider, Content } = Layout;

const App = () => {
	const [collapse, setCollapse] = useState(false);

	const toggle = () => {
		setCollapse(!collapse);
	};

	const dataSource = [
		{
			key: "1",
			name: "Mike",
			age: 32,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
	];

	const columns = [
		{
			title: "ESTACION",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "MODELO",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "ESTADO",
			dataIndex: "address",
			key: "address",
		},
	];

	return (
		<Layout>
			<Sider
				trigger={null}
				style={{
					height: "100vh",
				}}
				collapsible
				collapsed={collapse}
				className="site-layout-background">
				<div className="logo">
					<b>
						{!collapse && <span>MMS</span>} <FontAwesomeIcon icon={faBarcode} />
					</b>
				</div>
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={["1"]}
					className="site-layout-background">
					<Menu.Item key="1" icon={<OrderedListOutlined />}>
						LISTA DE ESCANEOS
					</Menu.Item>
					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						nav 3
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Affix offsetTop={0}>
					<Header className="header-template">
						{collapse ? (
							<MenuUnfoldOutlined
								className="trigger"
								onClick={() => toggle()}
							/>
						) : (
							<MenuFoldOutlined className="trigger" onClick={() => toggle()} />
						)}

						<div className="header-template__content-header">
							<div className="content-header__left-content draggable">
								<Typography.Title level={5} className="left-content__title">
									MONTAJE DE ESTACIONES
								</Typography.Title>
							</div>
							<div className="content-header__header-bottoms">
								<FontAwesomeIcon
									className="header-bottoms__icons"
									icon={faMinusCircle}
									onClick={() => window.electronApi.minimizeApp()}
								/>
								<FontAwesomeIcon
									className="header-bottoms__icons"
									icon={faWindowMaximize}
									onClick={() => window.electronApi.maxUnmaxWindow()}
								/>
								<FontAwesomeIcon
									className="header-bottoms__icons"
									icon={faTimes}
									onClick={() => window.electronApi.closeApp()}
								/>
							</div>
						</div>
					</Header>
				</Affix>
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						height: 280,
						overflow: "auto",
					}}>
					<Table dataSource={dataSource} columns={columns} />
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
