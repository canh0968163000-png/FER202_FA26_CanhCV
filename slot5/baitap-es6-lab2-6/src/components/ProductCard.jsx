import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const ProductCard = ({ product }) => {
  const {
    name = 'Sản phẩm chưa đặt tên',
    price,
    image,
    rating,
    category,
    inStock,
    discount = 0,
  } = product

  const imageSrc = image ?? 'https://placehold.co/300x200?text=No+Image'
  const categoryName = category?.name ?? 'Chưa phân loại'
  const ratingRate = rating?.rate ?? 'Chưa có'
  const ratingCount = rating?.count ?? 0
  const finalPrice = price == null ? undefined : price * (1 - discount / 100)
  const priceText =
    price?.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }) ?? 'Liên hệ'
  const finalPriceText =
    finalPrice?.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }) ?? 'Liên hệ'

  return (
    <Card className={`h-100 position-relative ${inStock ? '' : 'opacity-50'}`}>
      <Card.Img variant="top" src={imageSrc} alt={name} />
      {discount > 0 && (
        <Badge bg="danger" className="position-absolute top-0 end-0 m-2">
          -{discount}%
        </Badge>
      )}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Badge bg="secondary">{categoryName}</Badge>
        <div className="mt-2">
          {inStock ? (
            <Badge bg="success">Còn hàng</Badge>
          ) : (
            <Badge bg="secondary">Hết hàng</Badge>
          )}
        </div>
        <Card.Text className="mt-2">
          {discount > 0 ? (
            <>
              <del>{priceText}</del>
              <br />
              <strong>{finalPriceText}</strong>
            </>
          ) : (
            <strong>{priceText}</strong>
          )}
        </Card.Text>
        <Card.Text>
          Đánh giá: {ratingRate} ({ratingCount} lượt)
        </Card.Text>
        {rating?.rate >= 4.5 && (
          <Badge bg="warning" text="dark">
            Bán chạy
          </Badge>
        )}
      </Card.Body>
      <Card.Body>
        <Button variant="primary" disabled={!inStock}>
          {inStock ? 'Thêm vào giỏ' : 'Không khả dụng'}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
