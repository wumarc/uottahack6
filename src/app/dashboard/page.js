'use client'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../page.module.css';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Dashboard({}) {

    return (
        <Container className={styles.pageDetail}>

            {/* Header */}
            <Row className="justify-content-center">
                <Col xl="auto" className="text-center">
                {/* Display the image called logo.png */}
                <Image src={logo} alt="logo" height={80} />
                </Col>
            </Row>

            {/* Chart 1 */}
            <Row className="justify-content-center">
                <Col xl="auto" className="text-center">
                <p>Average CO2 Emission Rate Per Customer (in pounds)</p>
                <LineChart
                    xAxis={[{scaleType: 'point',  data: ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'], label: 'Month'}]}
                    
                    series={[
                        {
                        data: [12, 6, 18, 24, 24, 30, 12, 12, 6, 18, 36, 36],
                        label: 'CO2 Emission (pounds)',
                        },
                    ]}
                    width={500}
                    height={300}
                />
                </Col>
            </Row>

            {/* Chart 2 */}
            <Row className="justify-content-center">
                <Col xl="auto" className="text-center">
                    <p>Average CO2 Emission Rate Per Customer (in pounds)</p>
                    <PieChart
                        series={[{
                            data: [
                                {id: 0, value: 10, label: 'Mobility'},
                                {id: 1, value: 15, label: 'Consumption'},
                                {id: 2, value: 20, label: 'Living'},
                            ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </Col>
            </Row>

            {/* Chart 3 */}
            <Row className="justify-content-center">
                <Col xl="auto" className="text-center">
                    <p>Liters of Water Saved Every Month</p>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'], label: 'Month'}]}
                        series={[{ data: [36000, 18000, 54000, 72000, 72000, 90000, 36000, 36000, 18000, 54000, 108000, 108000], label: 'Water Saved (in liters)'
                        }]}
                        width={500}
                        height={300}
                    />
                </Col>
            </Row>

        </Container>
    );
}
