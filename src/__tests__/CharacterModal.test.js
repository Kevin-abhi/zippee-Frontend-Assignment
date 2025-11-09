import { render, screen, fireEvent } from "@testing-library/react";
import CharacterModal from "../components/CharacterModal";

test("opens modal with correct character", () => {
    const character = { name: "Luke Skywalker", height: "172" };
    render(<CharacterModal character={character} onClose={() => { }} />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
});
