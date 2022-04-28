from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Introduction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }



api.add_resource(Introduction, '/introduction')