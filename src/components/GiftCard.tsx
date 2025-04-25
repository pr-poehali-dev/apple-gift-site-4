
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type GiftCardProps = {
  price: number;
  image: string;
  title: string;
  description: string;
};

const GiftCard = ({ price, image, title, description }: GiftCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200">
        <img 
          src={image} 
          alt={title} 
          className="object-contain w-full h-full p-6"
        />
      </div>
      <CardHeader className="px-6 pt-6 pb-0">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pt-4">
        <p className="text-2xl font-medium">{price.toLocaleString()} ₽</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button className="w-full bg-black hover:bg-gray-800 text-white">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
