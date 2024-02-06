import { useActiveSection } from "../hooks/useActiveSection";

const About = () => {
  const { ref } = useActiveSection("#about");

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 scroll-mt-10 lg:px-0 px-5  mx-auto max-w-[1014px]"
    >
      <h1 className="text-white font-bold sm:text-[40px] text-[27px]">About</h1>

      <div className="mt-8 text-white space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
          amet consectetur adipiscing elit pellentesque habitant. Cras pulvinar
          mattis nunc sed blandit libero volutpat. Odio ut enim blandit volutpat
          maecenas volutpat. Sapien eget mi proin sed libero enim. Amet
          facilisis magna etiam tempor. Facilisi cras fermentum odio eu feugiat
          pretium nibh. Nibh tellus molestie nunc non blandit. Integer enim
          neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque
          non tellus. Et pharetra pharetra massa massa ultricies mi quis. Nisl
          rhoncus mattis rhoncus urna neque viverra justo nec. Eget sit amet
          tellus cras adipiscing enim eu turpis. Volutpat commodo sed egestas
          egestas fringilla. Dui accumsan sit amet nulla. Morbi quis commodo
          odio aenean sed adipiscing. Elementum nisi quis eleifend quam
          adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum
          dolor. Dolor magna eget est lorem ipsum dolor. Nibh nisl condimentum
          id venenatis.
        </p>

        <p>
          Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque
          habitant. Interdum consectetur libero id faucibus nisl tincidunt eget
          nullam non. Mi bibendum neque egestas congue quisque egestas diam in
          arcu. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel.
          Arcu dictum varius duis at consectetur lorem. In nibh mauris cursus
          mattis molestie. Velit ut tortor pretium viverra suspendisse potenti
          nullam ac. Vivamus at augue eget arcu dictum varius. Ullamcorper
          malesuada proin libero nunc consequat interdum varius sit. Volutpat
          odio facilisis mauris sit amet massa vitae tortor condimentum. Morbi
          quis commodo odio aenean sed adipiscing diam donec. Nullam vehicula
          ipsum a arcu. Arcu non odio euismod lacinia at. Odio tempor orci
          dapibus ultrices in iaculis.
        </p>
        <p>
          Felis eget velit aliquet sagittis id consectetur purus ut faucibus.
          Est velit egestas dui id. Ipsum a arcu cursus vitae congue mauris
          rhoncus aenean vel. Sed felis eget velit aliquet sagittis id
          consectetur. Consequat interdum varius sit amet mattis. Adipiscing
          elit pellentesque habitant morbi tristique. Elit eget gravida cum
          sociis natoque penatibus et magnis dis. Sit amet nisl purus in mollis
          nunc. In nulla posuere sollicitudin aliquam. Ut tortor pretium viverra
          suspendisse potenti. Facilisi etiam dignissim diam quis enim.
          Consectetur purus ut faucibus pulvinar elementum integer enim neque
          volutpat. Pellentesque massa placerat duis ultricies lacus. Donec
          massa sapien faucibus et molestie. Ac turpis egestas sed tempus urna
          et pharetra. At lectus urna duis convallis convallis tellus. Egestas
          diam in arcu cursus euismod quis viverra. Malesuada nunc vel risus
          commodo viverra maecenas accumsan lacus vel.
        </p>
      </div>
    </section>
  );
};
export default About;
