import React from "react";
import {Col, Row} from "antd";
import {MainContent} from "../../block/main-content";

export const Wrapper = () => {
    return(
    <Row>
        <Col xs={24} md={{span: 12, offset: 6}}>
            <MainContent />
        </Col>
    </Row>
    )
}
