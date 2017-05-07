package modules;

import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import helpers.Log;

/***
 * 
 * @author mrathore
 *
 */

public class BusinessFeatureCollectionOne {

	public static void Execute(WebDriver driver) throws Exception {

		Log.info("Sign in is performed");

		Reporter.log("Sign in is performed");

	}
}
