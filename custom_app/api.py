    
import frappe

@frappe.whitelist(allow_guest=True)
def get_logged_user_company():
    if frappe.session.user == "Guest":
        return None
    user = frappe.session.user

    employee = frappe.db.get_value(
        "Employee",
        {"user_id": user},
        "company"
    )

    if not employee:
        return {
            "company": None,
            "user": user,
            "reason": "No Employee linked"
        }

    
    return employee
