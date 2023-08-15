import RandomItem from "@/components/RandomItem";

export default function Random() {
    return (
        <div>
            <h1>Random</h1>
            <RandomItem tier={1} title="Acessórios" />
            <RandomItem tier={2} title="Saqueando Monstros" />
        </div>
    )
}