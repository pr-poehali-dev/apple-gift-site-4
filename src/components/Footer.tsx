
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Apple Gift</h3>
            <p className="text-sm text-gray-600">
              Официальный магазин подарочных карт для экосистемы Apple.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900">
                  Карты
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-sm text-gray-600 hover:text-gray-900">
                  Инструкция
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <p className="text-sm text-gray-600">
              support@applegift.ru<br />
              +7 (800) 123-45-67
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Apple Gift. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
