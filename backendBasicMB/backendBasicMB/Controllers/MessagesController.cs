using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backendBasicMB.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        //Temporary
        static List<Models.Message> messages = new List<Models.Message>{
                                               new Models.Message { Owner = "John", Text = "Hello World"},
                                               new Models.Message{Owner = "Stephanie", Text = "Make Breakfast"},
                                               new Models.Message{Owner = "Aloha", Text = "Love the pies" }
            };
        
        //This is our Get function
        public IEnumerable<Models.Message> Get()
        {
            return messages;
        }

        //Use Decorator to make sure its known to be an HttpGet
        [HttpGet("{name}")]
        public IEnumerable<Models.Message> Get(string name)
        {
            //Lambda used to get message of specific owner specified by the string 'name'
            return messages.FindAll(message => message.Owner.ToLower() == name.ToLower());
        }

        //action decorator is required because ASP.Net Core will assume that any function without a http action decorator is a Get()
        [HttpPost]
        //This is our post function, because we are passing message through angular, from Body not a URL
        public Models.Message Post([FromBody] Models.Message message)
        {
            //Add new message to the messages list.
            messages.Add(message);
            return message;
        }
    }
}