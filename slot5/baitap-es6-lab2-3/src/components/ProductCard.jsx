import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

const ProductCard = ({ product }) => {
  const {
    name = 'Sản phẩm chưa đặt tên',
    price,
    image,
    rating,
    category,
  } = product

  const imageSrc =
    image ?? 'https://placehold.co/300x200?text=No+Image'

  const categoryName =
    category?.name ?? 'Chưa phân loại'

  const ratingRate =
    rating?.rate ?? 'Chưa có'

  const ratingCount =
    rating?.count ?? 0

  const priceText =
    price?.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }) ?? 'Liên hệ'

  return (
    <Card>
      <Card.Img
        variant="top"
        src={imageSrc}
        alt={name}
      />

      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Badge bg="secondary">
          {categoryName}
        </Badge>

        <Card.Text>
          Giá: {priceText}
        </Card.Text>

        <Card.Text>
          Đánh giá: {ratingRate} ({ratingCount} lượt)
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard