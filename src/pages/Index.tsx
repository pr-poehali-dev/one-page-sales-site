import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-gray-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6">
            Революционные товары
            <span className="text-primary block mt-2">для вашего успеха</span>
          </h1>
          <p className="font-opensans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Откройте новые возможности с нашими инновационными решениями. 
            Качество, надёжность и результат - всё в одном месте.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Заказать сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-90">
            ⚡ Быстрая доставка • 💯 Гарантия качества • 🎯 Результат с первого дня
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-secondary mb-4">
              Почему выбирают нас
            </h2>
            <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
              Тысячи довольных клиентов уже оценили преимущества наших решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-xl">Молниеносная скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-opensans text-base">
                  Мгновенные результаты и быстрая обработка заказов. 
                  Получите то, что нужно, без ожидания.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-xl">100% гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-opensans text-base">
                  Полная защита вашей покупки. Возврат средств, 
                  если результат не оправдает ожидания.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-xl">Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-opensans text-base">
                  Наша команда экспертов всегда готова помочь. 
                  Получите ответы на вопросы в любое время.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-secondary mb-4">
              Отзывы клиентов
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Узнайте, что говорят о нас наши довольные покупатели
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <CardTitle className="font-montserrat text-lg">Анна Петрова</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-opensans text-gray-700 italic">
                  "Невероятное качество! Результат превзошёл все ожидания. 
                  Рекомендую всем, кто ищет надёжное решение."
                </p>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <CardTitle className="font-montserrat text-lg">Михаил Иванов</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-opensans text-gray-700 italic">
                  "Быстро, качественно, профессионально. Поддержка на высшем уровне. 
                  Буду заказывать ещё!"
                </p>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    Е
                  </div>
                  <div>
                    <CardTitle className="font-montserrat text-lg">Елена Сидорова</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-opensans text-gray-700 italic">
                  "Отличное соотношение цены и качества. Получила больше, 
                  чем ожидала за такую стоимость."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-secondary mb-4">
              Выберите свой тариф
            </h2>
            <p className="font-opensans text-lg text-gray-600">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-center">Базовый</CardTitle>
                <div className="text-center">
                  <span className="font-montserrat text-4xl font-bold text-secondary">₽2,990</span>
                  <span className="text-gray-600 ml-2">/ месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">5 товаров в каталоге</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Базовая поддержка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Обработка заказов</span>
                </div>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-primary hover:shadow-lg transition-shadow duration-300">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-center">Профи</CardTitle>
                <div className="text-center">
                  <span className="font-montserrat text-4xl font-bold text-secondary">₽4,990</span>
                  <span className="text-gray-600 ml-2">/ месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">25 товаров в каталоге</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Приоритетная поддержка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Аналитика и отчёты</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Интеграции</span>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-center">Бизнес</CardTitle>
                <div className="text-center">
                  <span className="font-montserrat text-4xl font-bold text-secondary">₽9,990</span>
                  <span className="text-gray-600 ml-2">/ месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Безлимит товаров</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Персональный менеджер</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">Продвинутая аналитика</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-opensans">API доступ</span>
                </div>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="font-opensans text-xl mb-8 opacity-90">
            Свяжитесь с нами прямо сейчас и получите персональную консультацию
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="font-montserrat text-lg font-semibold mb-2">Телефон</h3>
              <p className="font-opensans text-primary">+7 (495) 123-45-67</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="font-montserrat text-lg font-semibold mb-2">Email</h3>
              <p className="font-opensans text-primary">info@example.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="font-montserrat text-lg font-semibold mb-2">Адрес</h3>
              <p className="font-opensans text-primary">Москва, ул. Примерная, 123</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-4 text-lg">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-opensans text-gray-400">
            © 2024 Ваша Компания. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;