package step_definitions;

import static org.testng.Assert.assertFalse;
import static org.testng.AssertJUnit.assertEquals;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/***
 * 
 * @author mrathore
 *
 */

// Sample Web Page Object class for Princess.com

public class WebHomePageSteps {
	public WebDriver driver;
	public long shortWait=1000L;
	public long mediumWait = 3000L;
	public long longWait = 5000L;
	
	public WebHomePageSteps() {
		driver = Hooks.driver;
	}

	@Given("^I open princess website \"(.*?)\" page$")
	public void i_open_princess_website(String HOME) throws Throwable {
		String HomePageUrl = "http://www.princess.com";
		driver.get(HomePageUrl);
		Thread.sleep(shortWait);
	}

	@Then("^I validate title and URL$")
	public void i_print_title_and_URL() throws Throwable {
		// System.out.println(driver.getTitle());
		// assertEquals("Cruises – Cruise Vacations – Princess Cruises",
		// driver.getTitle());
		assertEquals("http://www.princess.com/", driver.getCurrentUrl());
		Thread.sleep(shortWait);
	}

	@Given("^I scroll to \"(.*?)\" section$")
	public void i_scroll_to_section(String sectionName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,150)", "");
		Thread.sleep(shortWait);
	}

	@When("^I select \"(.*?)\" as \"(.*?)\" value$")
	public void i_select_as_value(String DropDownName, String Value) throws Throwable {

		System.out.println(DropDownName);
		System.out.println(Value);

		if (DropDownName.equals("Month_Year")) {
			WebElement monthElement = driver.findElement(By.id("month"));
			Select monthSelect = new Select(monthElement);
			monthSelect.selectByVisibleText(Value);
			monthElement.click();
		} else if (DropDownName.equals("Destination")) {
			WebElement destinationElement = driver.findElement(By.id("destination"));
			Select destinationSelect = new Select(destinationElement);
			destinationSelect.selectByVisibleText(Value);
			destinationElement.click();
		} else if (DropDownName.equals("Departure Port")) {
			WebElement portElement = driver.findElement(By.id("port"));
			Select portSelect = new Select(portElement);
			portSelect.selectByVisibleText(Value);
			portElement.click();
		} else if (DropDownName.equals("Cruise Length")) {
			WebElement durationElement = driver.findElement(By.id("duration"));
			Select durationSelect = new Select(durationElement);
			durationSelect.selectByVisibleText(Value);
			durationElement.click();
		}
		Thread.sleep(shortWait);
	}

	@Then("^I press \"(.*?)\" button$")
	public void i_press_button(String arg1) throws Throwable {
		driver.findElement(By.id("view-results")).click();
		Thread.sleep(shortWait);
	}

	@Then("^I validate First Cruise \"(.*?)\"$")
	public void i_validate_First_Cruise(String checkAvailability) throws Throwable {
		if (checkAvailability.equals("Available")) {
			Boolean flag = driver.findElement(By.xpath("//div[contains(text(), 'This sail date is SOLD OUT')]"))
					.isDisplayed();
			assertFalse(flag);
		}
	}
	
	
	@Then("^I open \"(.*?)\" available cruise details$")
	public void i_open_first_cruise_details(String arg1) throws Throwable {
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");
		Thread.sleep(shortWait);
		
		List<WebElement> cruiseDetails=driver.findElements(By.xpath("//button[contains(@id,'select-cruise')]"));
		if(arg1.equals("first")){
		cruiseDetails.get(0).click();
		Thread.sleep(shortWait);
		}
		
		
	}
	
}