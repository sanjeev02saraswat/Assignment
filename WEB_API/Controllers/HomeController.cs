namespace WEBAPI.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System;

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        public HomeController()
        {

        }

        [HttpGet]
        [AllowAnonymous]
        [ActionName("weekday")]
        public IActionResult WeekDay([FromQuery]string param = "")
        {
            bool paramSpecified = false;
            if (!string.IsNullOrEmpty(param))
            {
                paramSpecified = true;
            }
            DateTime[] dateTimes = new DateTime[] {
                DateTime.Now,
                DateTime.Now.AddDays(1),
                DateTime.Now.AddDays(2),
                DateTime.Now.AddDays(3),
                DateTime.Now.AddDays(4),
                DateTime.Now.AddDays(5),
                DateTime.Now.AddDays(6)
            };
            return new ObjectResult(new { ParamSpecified = paramSpecified, DateArray = dateTimes });
        }



        [HttpPost]
        [AllowAnonymous]
        [ActionName("weekday")]
        public IActionResult PostWeekDay([FromBody]DateTime[] dateTimes)
        {
            string data = "Each object in the array should be set to the corresponding date in the input array : ";
            foreach (var item in dateTimes)
            {
                data += "-" + item.ToString() + "-";
            }
            throw new Exception(data);
        }



        [HttpPut]
        [AllowAnonymous]
        [ActionName("weekday")]
        public IActionResult PutWeekDay([FromBody]DateTime[] dateTimes)
        {
            //update login

            return new ObjectResult(dateTimes);
        }


    }
}

