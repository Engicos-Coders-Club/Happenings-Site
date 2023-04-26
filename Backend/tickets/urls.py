from django.urls import path
from . import views
from .views import *


urlpatterns = [

    # path('contact/', views.ContactUs.as_view(), name="contact"),
    # path('get-categories/', views.GetCategories.as_view(), name="get-categories"),

    # path('get-products/', views.get_products, name="get-products"),
    # path('single-products/<id>/', views.GetSingleProduct.as_view(), name="single-products"),
    
    # path("add-product/", views.AddProductView, name="add-product"),

    # path('add-product-image/<prod_id>/', views.add_product_image, name="add-product-image"),
	# path('delete-product-image/<id>/', views.delete_product_image, name="delete-product-image"),

    # path('user-data/', views.get_user_data, name="user-data"),

    # path('delete-ad/<prod_id>/', views.ad_is_sold, name="delete-ad"),

]
