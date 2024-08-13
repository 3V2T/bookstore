import day from 'dayjs'
import Table from 'react-bootstrap/Table'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { quaternaryBgColor } from '../../assets/js/variables'
import { useEffect } from 'react'
day.extend(advancedFormat)

const OrdersList = ({ orders, meta }) => {
  const tr = document.getElementsByTagName('tr')
  
  useEffect(() => {
    Array.from(tr).forEach((row) => {
      if (Number(row.id) % 2 === 0) {
        Array.from(row.childNodes).forEach((child) => {
          child.style.backgroundColor = quaternaryBgColor
        })
      }
    })
  }, [orders])

  return (
    <div className="table-container">
      <h4 className="total-item">Total Orders : {meta.totalOrders}</h4>
      {/* Table */}
      <div>
        <Table>
          {/* head */}
          <thead>
            <tr id="field-title">
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const {
                customer_name,
                recipient_name,
                shipping_address,
                customer_phone,
                recipient_phone,
                total: cost,
                created_at,
              } = order

              const date = day(created_at).format('hh:mm a - MMM Do, YYYY ')

              return (
                <tr key={order.id} id={index}>
                  <td>{recipient_name || customer_name}</td>
                  <td>{shipping_address}</td>
                  <td>{recipient_phone || customer_phone}</td>
                  <td>{cost}</td>
                  <td>{date}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
export default OrdersList
