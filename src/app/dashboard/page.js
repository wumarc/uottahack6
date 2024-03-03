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
            <p>Average CO2 Emission Rate Per Customer (in pounds)</p>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={500}
                height={300}
            />

            {/* Chart 2 */}
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


            {/* Chart 3 */}
            <p>Liters of Water Saved Every Month</p>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
            />


        </Container>
    );
}