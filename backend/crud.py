from sqlalchemy.orm import Session
from models import Employee


def get_employees(db: Session):
    return db.query(Employee).all()


def get_employee(db: Session, employee_id: int):
    return db.query(Employee).filter(
        Employee.id == employee_id
    ).first()


def create_employee(db: Session, employee):
    db_employee = Employee(
        name=employee.name,
        email=employee.email,
        department=employee.department
    )

    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)

    return db_employee


def update_employee(db: Session, employee_id: int, employee_data):
    employee = get_employee(db, employee_id)

    if not employee:
        return None

    employee.name = employee_data.name
    employee.email = employee_data.email
    employee.department = employee_data.department

    db.commit()
    db.refresh(employee)

    return employee


def delete_employee(db: Session, employee_id: int):
    employee = get_employee(db, employee_id)

    if employee:
        db.delete(employee)
        db.commit()

    return employee