﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Apteczka.API.Models.Results
{
    public class DeletePharmacyResult : BaseResult
    {
        public DeletePharmacyResult(bool success)
        {
            this.Success = success;
        }
    }
}