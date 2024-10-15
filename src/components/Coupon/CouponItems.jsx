import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap'
import styled from 'styled-components'
import {
  boldTextColor,
  quaternaryBgColor,
  quaternaryBgColorLight,
  textColor,
} from '../../assets/js/variables'
import { TbCalendarTime } from 'react-icons/tb'
import { FaRegCalendarTimes } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import {
  FormInput,
  FileInput,
  CouponList,
  DateInput,
  SelectInput,
  CheckboxInput,
  RadiosInput,
  Loading,
  CouponFilter,
} from '../../components'
import dayjs from 'dayjs'
import { getCurrentDateTime } from '../../utils'

const CouponItems = ({ coupon }) => {
  const [showCouponModal, setShowCouponModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleShowModal = () => setShowCouponModal(true)
  const handleCloseModal = () => setShowCouponModal(false)
  const [values, setValues] = useState({
    code: '',
    description: '',
    discount_type: 'percentage',
    discount_amount: 0,
    discount_percentage: 0,
    min_order_value: 0,
    start_date: dayjs(getCurrentDateTime()),
    expiration_date: dayjs(getCurrentDateTime()),
    usage_limit: 0,
    limit_per_customer: 0,
    stackable: false,
    applicable_publisher: '',
  })
  return (
    <StyledCard>
      <Card className="p-3 shadow-sm">
        <Row>
          {/* Icon và thông tin chính */}
          <Col md={10}>
            <Card.Body>
              <Card.Title className="mb-0">{coupon.code}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {coupon.description}
              </Card.Subtitle>

              <Row className="mb-2">
                <Col xs={6} className="d-flex align-items-center">
                  <i>
                    <TbCalendarTime />
                  </i>{' '}
                  {coupon.start_date}
                </Col>

                <Col xs={6} className="d-flex align-items-center">
                  <i>
                    <FaRegCalendarTimes />
                  </i>{' '}
                  {coupon.expiration_date}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={6} className="d-flex align-items-center">
                  <i>
                    {' '}
                    <FaBuilding />
                  </i>{' '}
                  {coupon?.publisher?.name}
                </Col>
                {/* Trạng thái */}
                <Col xs={6}>
                  <Button variant="outline-primary" className="btn-status">
                    {coupon.status}
                  </Button>
                </Col>
              </Row>

              <div className="d-flex justify-content-start">
                <Button
                  variant="info"
                  className="me-2"
                  onClick={handleShowModal}
                >
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Modal show={showCouponModal} onHide={handleCloseModal}>
        <Form method="post">
          <Modal.Header
            closeButton
            style={{ backgroundColor: `${quaternaryBgColor}` }}
          >
            <Modal.Title>Tạo mã giảm giá</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: `${quaternaryBgColor}` }}>
            <div className="row">
              <div className="col">
                <FormInput label="Nhập mã giảm giá" type="text" name="code" />
              </div>
              <div className="col">
                <div>Loại giảm giá</div>
                {['percentage', 'amount'].map((type) => {
                  return (
                    <div className="ms-2" key={type}>
                      <RadiosInput
                        key={type}
                        name="discount_type"
                        value={type}
                        label={type === 'percentage' ? 'Phần trăm' : 'Số tiền'}
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            <FormInput
              label="Nhập mô tả mã giảm giá"
              type="text"
              name="description"
            />
            <div className="row">
              <div className="col">
                {values.discount_type === 'percentage' ? (
                  <FormInput
                    label="Phần trăm"
                    type="number"
                    name="discount_percentage"
                  />
                ) : (
                  <FormInput
                    label="Số tiền"
                    type="number"
                    name="discount_amount"
                  />
                )}
              </div>
              <div className="col">
                <FormInput
                  label="Áp dụng cho giá trị từ"
                  type="number"
                  name="min_order_value"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <DateInput label="Ngày hiệu lực" name="start_date" />
              </div>
              <div className="col">
                <DateInput label="Ngày hết hạn" name="expiration_date" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <FormInput
                  label="Tổng số lần sử dụng"
                  type="number"
                  name="usage_limit"
                />
              </div>
              <div className="col">
                <FormInput
                  label="Số lần sử dụng / khách hàng"
                  type="number"
                  name="limit_per_customer"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                {/* <SelectInput
                  defaultValue="all"
                  label="Nhà xuất bản"
                  name="applicable_publisher"
                  list=""
                /> */}
              </div>
              <div className="col mt-4">
                <CheckboxInput label="Dùng với mã khác" name="stackable" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: `${quaternaryBgColor}` }}>
            <div className="btn-container">
              <button
                disabled={loading}
                type="button"
                onClick={handleCloseModal}
                style={{ backgroundColor: `${quaternaryBgColorLight}` }}
                className="btn"
              >
                {loading ? 'Đang xử lý...' : 'Đóng'}
              </button>
              <button
                disabled={loading}
                type="submit"
                style={{ backgroundColor: `${quaternaryBgColorLight}` }}
                className="btn ms-2"
              >
                {loading ? 'Đang xử lý...' : 'Thêm mã giảm giá'}
              </button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  .card {
    color: ${boldTextColor};
    background-color: ${quaternaryBgColorLight};
  }
  .job-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .btn-status {
    background-color: ${quaternaryBgColor};
    color: ${textColor};
    font-weight: bold;
    border: none;
  }
  .btn-status:hover {
    background-color: #c3d2ff;
  }
  .card-subtitle {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${boldTextColor}!important;
  }
  i {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`

export default CouponItems
