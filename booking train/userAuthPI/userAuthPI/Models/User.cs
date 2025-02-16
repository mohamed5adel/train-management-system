using System.ComponentModel.DataAnnotations;

namespace userAuthPl.Models
{
    public class User
    {
        public int UserId { get; set; }

        [Required(ErrorMessage = "الاسم الأول مطلوب")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "الاسم الأخير مطلوب")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "البريد الإلكتروني مطلوب")]
        [EmailAddress(ErrorMessage = "البريد الإلكتروني غير صحيح")]
        public string Email { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public string NationalIdNo { get; set; }

        [Required(ErrorMessage = "رقم الهاتف مطلوب")]
        public string MobileNo { get; set; }

        [Required(ErrorMessage = "كلمة المرور مطلوبة")]
        [MinLength(6, ErrorMessage = "يجب أن تكون كلمة المرور على الأقل 6 أحرف")]
        public string PasswordHash { get; set; }
    }
}