from django.db import models


# Create your models here.
class LessonRegistration(models.Model):
    full_name = models.CharField('ФИО', max_length=200)
    phone = models.CharField('Телефон', max_length=17)
    email = models.EmailField('Email')
    course = models.ImageField('Курс')
    created_at = models.DateTimeField('Дата записи', auto_created=True)
