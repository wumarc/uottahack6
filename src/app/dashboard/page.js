'use client'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../page.module.css';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LineChart } from '@mui/x-charts/LineChart';


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



            {/* Chart 3 */}



        </Container>
    );
}
