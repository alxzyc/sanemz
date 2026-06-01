import { zodResolver } from '@hookform/resolvers/zod';
import { Upload } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Input, Textarea } from '../components/ui/input';

const schema = z.object({
  name: z.string().min(2, 'Informe seu nome.'),
  email: z.string().email('Email inválido.'),
  character: z.string().min(2, 'Informe o personagem.'),
  size: z.enum(['Pequeno', 'Médio', 'Grande']),
  material: z.string().min(2, 'Informe o material.'),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CustomOrder() {
  const [previews, setPreviews] = useState<string[]>([]);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { size: 'Médio', material: 'Resina 8K' },
  });
  const size = watch('size');
  const eta = useMemo(() => (size === 'Pequeno' ? '7 dias' : size === 'Grande' ? '15 dias' : '10 dias'), [size]);

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 pt-32">
      <h1 className="gradient-text text-7xl">Projeto Personalizado</h1>
      <p className="mt-4 text-slate-300">Envie referências e receba uma estimativa automática para sua figura exclusiva.</p>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="reveal mt-10 grid gap-5 rounded-[2rem] bg-[#161626]/80 p-6 md:grid-cols-2"
      >
        <label>
          Nome
          <Input {...register('name')} />
          {errors.name && <small className="text-pink-300">{errors.name.message}</small>}
        </label>
        <label>
          Email
          <Input {...register('email')} />
          {errors.email && <small className="text-pink-300">{errors.email.message}</small>}
        </label>
        <label>
          Personagem
          <Input {...register('character')} />
          {errors.character && <small className="text-pink-300">{errors.character.message}</small>}
        </label>
        <label>
          Tamanho
          <select className="w-full rounded-2xl bg-[#0F0F1A] p-3" {...register('size')}>
            <option>Pequeno</option>
            <option>Médio</option>
            <option>Grande</option>
          </select>
        </label>
        <label>
          Material
          <Input {...register('material')} />
          {errors.material && <small className="text-pink-300">{errors.material.message}</small>}
        </label>
        <div className="rounded-2xl border border-dashed border-cyan-300/40 p-4">
          <Upload className="mb-2 text-cyan-200" />
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={(event) => {
              const files = Array.from(event.target.files ?? []);
              setPreviews(files.map(URL.createObjectURL));
            }}
          />
        </div>
        <label className="md:col-span-2">
          Observações
          <Textarea {...register('notes')} />
        </label>
        <div className="md:col-span-2 rounded-2xl bg-purple-500/15 p-4 font-heading text-2xl">
          Estimativa: <span className="text-yellow-300">{eta}</span>
        </div>
        {previews.length > 0 && (
          <div className="md:col-span-2 grid grid-cols-3 gap-3">
            {previews.map((src) => (
              <img key={src} src={src} className="h-32 rounded-2xl object-cover" alt="Preview do arquivo enviado" />
            ))}
          </div>
        )}
        <Button className="md:col-span-2">Enviar Orçamento</Button>
        {isSubmitSuccessful && <p className="md:col-span-2 text-green-300">Solicitação validada com sucesso!</p>}
      </form>
    </section>
  );
}
