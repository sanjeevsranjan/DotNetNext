using DAL;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Owin.Security.OAuth;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CoreWebAPI
{
    public class ApplicationOAuthProvider: OAuthAuthorizationServerProvider
    {
        IUnitOfWork db;
        public ApplicationOAuthProvider(IUnitOfWork _db)
        {
            db = _db;
        }
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            if(context.UserName=="sanjeevr1102" && context.Password=="12345")
            {
                identity.AddClaim(new Claim(ClaimTypes.Role,"User"));
                identity.AddClaim(new Claim("username","sanjeevr1102"));
                identity.AddClaim(new Claim(ClaimTypes.Name,"Sanjeev Ranjan"));
                context.Validated(identity);
            }

            else
            {
                context.SetError("invalid_grant", "Provided user name and password is incorrect");
                return;
            }

          //  var user = db.UserRepo.GetAll().Where(e => e.UserName == "sanjeevr1102" );


            //var userStore = new UserStore<ApplicationUser>(new ApplicationContext());
            //var manager = new UserManager<ApplicationUser>(userStore);
            //var user = await manager.FindAsync(context.UserName, context.Password);
            //if (user != null)
            //{
            //    var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            //    identity.AddClaim(new Claim("Username", user.UserName));
            //    identity.AddClaim(new Claim("Email", user.Email));
            //    identity.AddClaim(new Claim("FirstName", user.FirstName));
            //    identity.AddClaim(new Claim("LastName", user.LastName));
            //    identity.AddClaim(new Claim("LoggedOn", DateTime.Now.ToString()));
            //    context.Validated(identity);
            //}
            //else
            //    return;
        }
    }
}
