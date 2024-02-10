# Creating Accessible WebPages

- As web developers we should always have
accessibility in mind. By having this focus from the beginning you will be well on your way to ensure
everyone can access the pages you create.

## Screen Readers

-  Screen readers are commonly used clients for those with vision impairments. As we spend time
ensuring a browser properly conveys the information we wish to share, we must also ensure a screen
reader does the same.

- At its most basic, a screen reader will read a page from top to bottom audibly. If your page is all text,
the reader will convey the information in a similar fashion to a browser. Of course, web pages are
rarely purely text; they will contain links, graphics, color, and other visual components. Care must be
taken to ensure that this information is read correctly by a screen reader.

## Zoom

- Another tool commonly used by people with vision impairments is zooming. The most basic type of
zooming is static zoom, controlled through Control + plus sign (+) or by decreasing screen
resolution. This type of zoom causes the entire page to resize, so using responsive design is
important to provide a good user experience at increased zoom levels.

## Contract checker

- Colors on web sites need to be carefully chosen to answer the needs of color-blind users or people
who have difficulty seeing low-contrast colors.

- browser extension to check color contracts on websites [extension]().

## LightHouse

- In the developer tool area of your browser, you'll find the Lighthouse tool. This tool is important to get
a first view of the accessibility (as well as other analysis) of a web site. While it's important not to rely
exclusively on Lighthouse, a 100% score is very helpful as a baseline.

# Designing for accessibility

## Color safe palletes

- People see the world in different ways, and this includes colors. When selecting a color scheme for
your site, you should ensure it's accessible to all.

## Use Correct HTML

- With CSS and JavaScript it's possible to make any element look like any type of control. <span>
could be used to create a <button> , and <b> could become a hyperlink. While this might be
considered easier to style, it conveys nothing to a screen reader. Use the appropriate HTML when
creating controls on a page. If you want a hyperlink, use <a> . Using the right HTML for the right
control is called making use of Semantic HTML.

## Create a descriptive heading hierarchy

- Screen reader users rely heavily on headings to find information and navigate through a page. Writing
descriptive heading content and using semantic heading tags are important for creating an easily
navigable site for screen reader users.

## Use good visual clues

- CSS offers complete control over the look of any element on a page. You can create text boxes
without an outline or hyperlinks without an underline. Unfortunately removing those clues can make it
more challenging for someone who depends on them to be able to recognize the type of control.

## The important of Link Text

- Hyperlinks are core to navigating the web. As a result, ensuring a screen reader can properly read
links allows all users to navigate your site.

### Bad Link text

- Screen readers read the text. If a URL appears in the text, the screen reader will read the URL.
Generally speaking, the URL does not convey meaningful information, and can sound annoying. You
may have experienced this if your phone has ever audibly read a text message with a URL.


- Screen readers also have the ability to read only the hyperlinks on a page, much in the same way a
sighted person would scan a page for links. If the link text is always "click here", all the user will hear
is "click here, click here, click here, click here, click here, ..." All links are now indistinguishable from
one another.

### Good link text

- Good link text briefly describes what's on the other side of the link. In the above example talking
about little penguins, the link is to the Wikipedia page about the species. The phrase little penguins
would make for perfect link text as it makes it clear what someone will learn about if they click the link - little penguins.

## ARIA [ Accessible Rich Internet Applications ]

- Duplicating the text of description and order make sense for someone using a
browser. However, someone using a screen reader would only hear the words description and order
repeated without context.

- To support these types of scenarios, HTML supports a set of attributes known as Accessible Rich
Internet Applications (ARIA). These attributes allow you to provide additional information to screen
readers.

## Images

- It goes without saying screen readers are unable to automatically read what's in an image. Ensuring
images are accessible doesn't take much work - it's what the alt attribute is all about. All
meaningful images should have an alt to describe what they are. Images that are purely
decorative should have their alt attribute set to an empty string: alt="" . This prevents screen
readers from unnecessarily announcing the decorative image.



