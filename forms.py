from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email


class ContactForm(FlaskForm):
    name = StringField('Ваше имя', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone = StringField('Номер телефона(Не обязательно)')
    question = TextAreaField('Ваш вопрос', validators=[DataRequired()])
    submit = SubmitField('Отправить')
