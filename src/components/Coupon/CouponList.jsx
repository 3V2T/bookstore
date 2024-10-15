import styled from 'styled-components'
import { boldTextColor } from '../../assets/js/variables'
import CouponItems from './CouponItems'

const CouponList = ({ coupons }) => {
  console.log(coupons)

  return (
    <Wrapper className="table-container">
      <div className="total-item">
        <h4>Số lượng : 0</h4>
      </div>
      <section className="coupon-items">
        {coupons.map((coupon) => {
          return <CouponItems key={coupon.id} coupon={coupon} />
        })}
      </section>
    </Wrapper>
  )
}
export default CouponList

const Wrapper = styled.section`
  padding: 0 6rem;
  flex-grow: 1;
  .table-container {
  }
  .total-item {
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${boldTextColor};
    margin-bottom: 1rem;
  }
  .coupon-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
`
